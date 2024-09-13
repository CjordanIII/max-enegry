import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  account_number: { type: Number, required: true },
  name: { type: String, required: true },
  address: { type: Schema.Types.ObjectId, ref: "Address", required: true },
  contact: { type: Schema.Types.ObjectId, ref: "Contact", required: true },
  account_information: {
    type: Schema.Types.ObjectId,
    ref: "AccountInformation",
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);

const contactSchema = new Schema({
  account_number: { type: Number, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
});

export const Contact = mongoose.model("Contact", contactSchema);

const addressSchema = new Schema({
  account_number: { type: Number, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  county: { type: String },
  zip: { type: Number, required: true },
});

export const Address = mongoose.model("Address", addressSchema);

const accountInformationSchema = new Schema({
  account_number: { type: Number, required: true },
  service_address: {
    type: Schema.Types.ObjectId,
    ref: "Address",
    required: true,
  },
  usage_data: { type: Schema.Types.ObjectId, ref: "UsageData", required: true },
  billing_and_Payment: {
    type: Schema.Types.ObjectId,
    ref: "BillingAndPayment",
    required: true,
  },
  customer_service_interactions: { type: String },
  energy_efficiency_program: { type: String },
  settings: { type: Schema.Types.ObjectId, ref: "Settings", required: true },
});

export const AccountInformation = mongoose.model(
  "AccountInformation",
  accountInformationSchema
);

const settingsSchema = new Schema({
  notification_settings: { type: String },
  preference_settings: { type: String },
  communication_preference: { type: String },
});

export const Settings = mongoose.model("Settings", settingsSchema);

const billingAndPaymentSchema = new Schema({
  current_bill: {
    type: Schema.Types.ObjectId,
    ref: "CurrentBill",
    required: true,
  },
  payment_history: {
    type: Schema.Types.ObjectId,
    ref: "PaymentHistory",
    required: true,
  },
  billing_history: {
    type: Schema.Types.ObjectId,
    ref: "BillingHistory",
    required: true,
  },
});

export const BillingAndPayment = mongoose.model(
  "BillingAndPayment",
  billingAndPaymentSchema
);

const currentBillSchema = new Schema({
  amount: { type: Number, required: true },
  due_date: { type: String, required: true },
  status: { type: String, required: true },
});

export const CurrentBill = mongoose.model("CurrentBill", currentBillSchema);

const usageDataSchema = new Schema({
  current_month_usage: { type: String },
  previous_month_usage: { type: String },
  peak_usage_times: { type: String },
  service_details: {
    type: Schema.Types.ObjectId,
    ref: "ServiceDetails",
    required: true,
  },
  outageInformation: { type: String },
  outage_history: { type: String },
});

export const UsageData = mongoose.model("UsageData", usageDataSchema);

const serviceDetailsSchema = new Schema({
  type_of_service: { type: String },
  service_plan: { type: String },
  service_end_date: { type: String },
  metering_date: { type: String },
});

export const ServiceDetails = mongoose.model(
  "ServiceDetails",
  serviceDetailsSchema
);

const billingHistorySchema = new Schema({
  account_number: { type: Number, required: true },
  date: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, required: true },
});

export const BillingHistory = mongoose.model(
  "BillingHistory",
  billingHistorySchema
);

const paymentHistorySchema = new Schema({
  account_number: { type: Number, required: true },
  date: { type: String, required: true },
  amount: { type: Number, required: true },
  method: { type: String, required: true },
  status: { type: String, required: true },
});

export const PaymentHistory = mongoose.model(
  "PaymentHistory",
  paymentHistorySchema
);
