export interface Service {
    id?: number,
    clientName: string,
    startDate: Date,
    finalDate: Date,
    serviceDescription: string,
    serviceValue: number,
    paidValue: number,
    paymentData: number,
    status: string
}