import { modalController } from "@ionic/core"

const Modal = ({ attrs: { mdl } }) => ({
  onremove: ({ dom }) =>
    dom.dismiss({
      dismissed: true,
    }),
  oncreate: ({ dom }) => {
    console.log(mdl)
    mdl.data.user.data &&
      modalController
        .create({
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
  },
  oninit: ({ attrs: { mdl } }) => mdl.modal.init(mdl),
  view: ({ attrs: { mdl } }) =>
    m(
      "ion-modal",
      m(
        "ion-header",
        m(
          "ion-toolbar",

          m("ion-title", mdl.modal.title()),
          m(
            "ion-buttons",
            { slot: "primary", onclick: () => mdl.modal.close() },
            m("ion-icon", { clot: "icons-only", name: "close" })
          )
        )
      ),
      m("ion-content.ion-padding.has-footer", mdl.modal.contents())
    ),
})

export default Modal
