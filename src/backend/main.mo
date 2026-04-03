import Map "mo:core/Map";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";

actor {
  type ContactForm = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
  };

  module ContactForm {
    public func compare(a : ContactForm, b : ContactForm) : Order.Order {
      switch (Text.compare(a.name, b.name)) {
        case (#equal) { Text.compare(a.email, b.email) };
        case (order) { order };
      };
    };
  };

  type LoanInquiry = {
    name : Text;
    phone : Text;
    amount : Nat;
  };

  module LoanInquiry {
    public func compare(a : LoanInquiry, b : LoanInquiry) : Order.Order {
      Text.compare(a.name, b.name);
    };
  };

  let contactForms = Map.empty<Nat, ContactForm>();
  let loanInquiries = Map.empty<Nat, LoanInquiry>();

  var contactFormCounter = 0;
  var loanInquiryCounter = 0;

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, message : Text) : async Nat {
    let id = contactFormCounter;
    let form : ContactForm = { name; email; phone; message };
    contactForms.add(id, form);
    contactFormCounter += 1;
    id;
  };

  public shared ({ caller }) func submitLoanInquiry(name : Text, phone : Text, amount : Nat) : async Nat {
    let id = loanInquiryCounter;
    let inquiry : LoanInquiry = { name; phone; amount };
    loanInquiries.add(id, inquiry);
    loanInquiryCounter += 1;
    id;
  };

  public query ({ caller }) func getContactForm(id : Nat) : async ContactForm {
    switch (contactForms.get(id)) {
      case (null) { Runtime.trap("Contact form not found") };
      case (?form) { form };
    };
  };

  public query ({ caller }) func getLoanInquiry(id : Nat) : async LoanInquiry {
    switch (loanInquiries.get(id)) {
      case (null) { Runtime.trap("Loan inquiry not found") };
      case (?inquiry) { inquiry };
    };
  };

  public query ({ caller }) func getAllContactForms() : async [ContactForm] {
    contactForms.values().toArray().sort();
  };

  public query ({ caller }) func getAllLoanInquiries() : async [LoanInquiry] {
    loanInquiries.values().toArray().sort();
  };
};
