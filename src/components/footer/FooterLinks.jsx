import Link from "next/link";

const FooterLinks = () => {
  const linksColum = [
    {
      name: "Product",
      data: [
        { label: "Overview", link: "#" },
        { label: "Pricing", link: "#" },
        { label: "Customer stories", link: "#" },
      ],
    },
    {
      name: "Resources",
      data: [
        { label: "Blog", link: "#" },
        { label: "Guides & tutorials", link: "#" },
        { label: "Help center", link: "#" },
      ],
    },
    {
      name: "Company",
      data: [
        { label: "About us", link: "#" },
        { label: "Careers", link: "#" },
        { label: "Media kit", link: "#" },
      ],
    },
  ];

  const showLinks = linksColum.map((link) => {
    return (
      <div key={link.name} className="text-white">
        <h1 className="text-xl font-bold">{link.name}</h1>
        <ul className="text-sm font-thin">
          {link.data.map((data) => (
            <li key={data.label}>
              <Link href={data.link}>{data.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  });

  return <div className="flex justify-around">{showLinks}</div>;
};

export default FooterLinks;
