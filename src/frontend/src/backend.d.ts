import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface LoanInquiry {
    name: string;
    phone: string;
    amount: bigint;
}
export interface ContactForm {
    name: string;
    email: string;
    message: string;
    phone: string;
}
export interface backendInterface {
    getAllContactForms(): Promise<Array<ContactForm>>;
    getAllLoanInquiries(): Promise<Array<LoanInquiry>>;
    getContactForm(id: bigint): Promise<ContactForm>;
    getLoanInquiry(id: bigint): Promise<LoanInquiry>;
    submitContactForm(name: string, email: string, phone: string, message: string): Promise<bigint>;
    submitLoanInquiry(name: string, phone: string, amount: bigint): Promise<bigint>;
}
