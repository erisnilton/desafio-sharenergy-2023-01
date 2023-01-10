export function getMenus() {
  return {
    items: [
      {
        id: 1,
        label: "Random User",
        icon: "pi pi-fw pi-home",
        to: "/",
      },
      {
        id: 2,
        label: "Random Dogs",
        icon: "pi pi-fw pi-home",
        to: "/random-dog",
      },
      {
        id: 3,
        label: "HTTP Cat",
        icon: "pi pi-fw pi-home",
        to: "/http-cat",
      },
      {
        id: 4,
        label: "Customer",
        icon: "pi pi-fw pi-home",
        to: "/customer",
      },
    ],
  };
}
