export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-700">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-3">
        At Rutvik Nutrition, we value your privacy. This policy explains how we collect and use your data:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>We collect basic details like name, email, and contact number during booking.</li>
        <li>Payment information is processed securely through Razorpay. We do not store card or bank details.</li>
        <li>Your information will never be shared with third parties except as required for providing our services.</li>
        <li>You may contact us anytime to request removal of your personal data.</li>
      </ul>
    </div>
  );
}
