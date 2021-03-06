const ionicRouter = () =>
  m(
    "ion-router",
    m("ion-route-redirect", { from: "!", to: "#!" }),
    mdl.routes.map((r) => {
      console.log("r", `${r.name}`),
        [
          m("ion-route-redirect", {
            from: `!/${r.name}`,
            to: `#!/${r.name}`,
          }),
          m("ion-route", {
            root: "#/!",
            url: `#!/${r.name}`,
            component: r.name,
          }),
        ]
    })
  )
