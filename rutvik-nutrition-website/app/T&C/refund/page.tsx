export default function RefundPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-700">
      <h1 className="text-3xl font-bold mb-4">Refund Policy</h1>
      <p className="mb-3">
        Please read our refund policy carefully before booking a course:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Course fees once paid are generally non-refundable.</li>
        <li>In special cases (such as duplicate payment), refunds may be considered at our discretion.</li>
        <li>Refund requests, if applicable, must be raised within 7 days of payment.</li>
        <li>Approved refunds will be processed to the original payment method within 7–10 working days.</li>
      </ul>
    </div>
  );
}
