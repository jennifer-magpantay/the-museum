export type DataType = {
  id: number;
  title: string;
  description: string;
  image: string | Promise<any>;
  date: string;
};

export const data = [
  {
    id: 1,
    title: "Gallery 1",
    description:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    image:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDMzNzB8MHwxfHNlYXJjaHwxfHxtdXNldW18ZW58MHwwfHx8MTY1NjkyNDY5MA&ixlib=rb-1.2.1&q=80&w=1080",
    date: "2022-03-10",
  },
  {
    id: 2,
    title: "diam cras pellentesque volutpat dui",
    description: "Quisque ut erat. Curabitur gravida nisi at nibh.",
    image:
      "https://images.unsplash.com/photo-1572953109213-3be62398eb95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDMzNzB8MHwxfHNlYXJjaHw0fHxtdXNldW18ZW58MHwwfHx8MTY1NjkyNDY5MA&ixlib=rb-1.2.1&q=80&w=1080",
    date: "2021-09-07",
  },
  {
    id: 3,
    title: "duis ac nibh fusce lacus",
    description: "Proin at turpis a pede posuere nonummy. Integer non velit.",
    image:
      "https://images.unsplash.com/photo-1496889196885-5ddcec5eef4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDMzNzB8MHwxfHNlYXJjaHwzfHxtdXNldW18ZW58MHwwfHx8MTY1NjkyNDY5MA&ixlib=rb-1.2.1&q=80&w=1080",
    date: "2022-07-01",
  },
  {
    id: 4,
    title: "sit amet consectetuer adipiscing elit",
    description:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    image:
      "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    date: "2022-04-19",
  },
  {
    id: 5,
    title: "tempus vivamus in felis eu",
    description: "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
    date: "2022-03-10",
  },
  {
    id: 6,
    title: "ante ipsum primis in faucibus",
    description: "Etiam faucibus cursus urna. Ut tellus.",
    image:
      "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDMzNzB8MHwxfHNlYXJjaHw5fHxtdXNldW18ZW58MHwwfHx8MTY1NjkyNDY5MA&ixlib=rb-1.2.1&q=80&w=1080",
    date: "2021-12-25",
  },
  {
    id: 7,
    title: "vel est donec odio justo",
    description: "Morbi a ipsum. Integer a nibh.",
    image:
      "https://images.unsplash.com/photo-1565060169194-19fabf63012c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDMzNzB8MHwxfHNlYXJjaHwyMHx8bXVzZXVtfGVufDB8MHx8fDE2NTY5MzI0Mjk&ixlib=rb-1.2.1&q=80&w=1080",
    date: "2021-11-21",
  },
  {
    id: 8,
    title: "elit sodales scelerisque mauris sit",
    description: "Suspendisse potenti. Nullam porttitor lacus at turpis.",
    image:
      "https://images.unsplash.com/photo-1534445291134-f70b7a81f691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDMzNzB8MHwxfHNlYXJjaHw4fHxtdXNldW18ZW58MHwwfHx8MTY1NjkyNDY5MA&ixlib=rb-1.2.1&q=80&w=1080",
    date: "2021-12-15",
  },
  {
    id: 9,
    title: "diam nam tristique tortor eu",
    description: "Integer ac neque. Duis bibendum.",
    image:
      "https://images.unsplash.com/photo-1536566482680-fca31930a0bd?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
    date: "2021-09-08",
  },
  {
    id: 10,
    title: "pede posuere nonummy integer non",
    description: "Suspendisse potenti. In eleifend quam a odio.",
    image:
      "https://images.unsplash.com/photo-1583306346437-f2143c0f11fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDMzNzB8MHwxfHNlYXJjaHw3fHxtdXNldW18ZW58MHwwfHx8MTY1NjkyNDY5MA&ixlib=rb-1.2.1&q=80&w=1080",
    date: "2021-09-24",
  },
  {
    id: 11,
    title: "dolor sit amet consectetuer adipiscing",
    description:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    image:
      "https://images.unsplash.com/photo-1575223970966-76ae61ee7838?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDMzNzB8MHwxfHNlYXJjaHw2fHxtdXNldW18ZW58MHwwfHx8MTY1NjkyNDY5MA&ixlib=rb-1.2.1&q=80&w=1080",
    date: "2021-11-02",
  },
  {
    id: 12,
    title: "eget semper rutrum nulla nunc",
    description: "Proin risus. Praesent lectus.",
    image:
      "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    date: "2021-08-17",
  },
  {
    id: 13,
    title: "in est risus auctor sed",
    description:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    image:
      "https://images.unsplash.com/photo-1514905552197-0610a4d8fd73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDMzNzB8MHwxfHNlYXJjaHw1fHxtdXNldW18ZW58MHwwfHx8MTY1NjkyNDY5MA&ixlib=rb-1.2.1&q=80&w=1080",
    date: "2022-03-05",
  },
  {
    id: 14,
    title: "donec odio justo sollicitudin ut",
    description:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    image:
      "https://images.unsplash.com/photo-1572953109213-3be62398eb95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDMzNzB8MHwxfHNlYXJjaHw0fHxtdXNldW18ZW58MHwwfHx8MTY1NjkyNDY5MA&ixlib=rb-1.2.1&q=80&w=1080",
    date: "2021-12-12",
  },
  {
    id: 15,
    title: "blandit non interdum in ante",
    description:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    image:
      "https://images.unsplash.com/photo-1496889196885-5ddcec5eef4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDMzNzB8MHwxfHNlYXJjaHwzfHxtdXNldW18ZW58MHwwfHx8MTY1NjkyNDY5MA&ixlib=rb-1.2.1&q=80&w=1080",
    date: "2021-12-06",
  },
  {
    id: 16,
    title: "eu massa donec dapibus duis",
    description: "Nulla tellus. In sagittis dui vel nisl.",
    image:
      "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    date: "2021-12-13",
  },
  {
    id: 17,
    title: "ante nulla justo aliquam quis",
    description:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    image:
      "https://images.unsplash.com/photo-1554907984-15263bfd63bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDMzNzB8MHwxfHNlYXJjaHwyfHxtdXNldW18ZW58MHwwfHx8MTY1NjkyNDY5MA&ixlib=rb-1.2.1&q=80&w=1080",
    date: "2021-11-09",
  },
  {
    id: 18,
    title: "pulvinar sed nisl nunc rhoncus",
    description:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    image:
      "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    date: "2022-04-06",
  },
  {
    id: 19,
    title: "in hac habitasse platea dictumst",
    description: "Integer ac neque. Duis bibendum.",
    image:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDMzNzB8MHwxfHNlYXJjaHwxfHxtdXNldW18ZW58MHwwfHx8MTY1NjkyNDY5MA&ixlib=rb-1.2.1&q=80&w=1080",
    date: "2022-01-29",
  },
  {
    id: 20,
    title: "consectetuer eget rutrum at lorem",
    description:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    image:
      "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    date: "2022-01-20",
  },
];
