interface navbarMenuListtypes {
  id: number;
  title: string;
  link: string;
}

const navbarMenuList: navbarMenuListtypes[] = [
  {
    id: 1,
    title: "خانه",
    link: "#",
  },
  {
    id: 2,
    title: "خدمات",
    link: "#",
  },
  {
    id: 3,
    title: "محصولات",
    link: "#",
  },
  {
    id: 4,

    title: "درباره ما",
    link: "#",
  },
  {
    id: 5,
    title: "ارتباط با ما",
    link: "#",
  },
];
const wew = window.innerWidth;
console.log(wew);

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-center gap-15  ">
      {navbarMenuList.map((nav) => (
        <ul>
          <li key={nav.id}>
            <a href={nav.link}>{nav.title}</a>
          </li>
        </ul>
      ))}
    </nav>
  );
};

export default Navbar;
