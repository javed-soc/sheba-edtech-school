export default function Contact() {
  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <input type="text" placeholder="Your Name" className="p-2 border w-full rounded" />
      <input type="email" placeholder="Your Email" className="p-2 border w-full rounded" />
      <textarea placeholder="Message" className="p-2 border w-full rounded" rows={4}></textarea>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
    </div>
  );
}