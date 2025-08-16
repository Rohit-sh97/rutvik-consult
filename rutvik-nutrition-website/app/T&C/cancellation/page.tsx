export default function CancellationPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-700">
      <h1 className="text-3xl font-bold mb-4">Cancellation Policy</h1>
      <p className="mb-3">
        Since our courses are limited-seat and scheduled in advance, cancellations are not available:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Once a booking is confirmed, it cannot be cancelled.</li>
        <li>If you are unable to attend, you may request to reschedule to another batch (subject to availability).</li>
        <li>No refunds will be issued for non-attendance.</li>
      </ul>
    </div>
  );
}
