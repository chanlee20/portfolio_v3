export default function SectionTitle({ title, content }) {
  return (
    <div>
      <div className="bg-thristle px-4 py-2 border-none rounded-md ">
        <p className="font-bold text-brown-rose">{title}</p>
      </div>
      <div>
        <p className="font-bold text-white mx-auto text-lg">{content}</p>
      </div>
    </div>
  );
}
