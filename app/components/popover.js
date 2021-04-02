import { popoverController } from "@ionic/core"

const Popover = () => ({
  onremove: ({ dom }) =>
    dom.dismiss({
      dismissed: true,
    }),
  oncreate: ({ attrs: { mdl }, dom }) => {
    return (
      mdl.data?.user?.data &&
      popoverController
        .create({
          event: mdl.state.event,
          component: dom,
          showBackdrop: true,
          backdropDismiss: true,
          cssClass: "",
          animated: true,
          swipeToClose: true,
          keyboardClose: true,
          id: mdl.state.user.id,
        })
        .then((modal) => modal.present())
    )
  },
  oninit: ({ attrs: { mdl } }) => mdl.modal.init(mdl),
  view: ({ attrs: { mdl } }) =>
    m(
      "ion-popover",
      m("ion-buttons", m("ion-icon", { slot: "icons-only", name: "close" })),
      m("", mdl.modal.title()),
      // m("ion-content.ion-padding",
      mdl.modal.contents()
      //  )
    ),
})

export default Popover
