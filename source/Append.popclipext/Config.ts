/// <reference path="../../popclip.d.ts" />
define(function () {
    const extension: Extension = {
        action(selection) {
            const separator = (popclip.modifierKeys & util.constant.MODIFIER_OPTION) ? "" : "\n"
            if (popclip.modifierKeys&(util.constant.MODIFIER_SHIFT)) {
                pasteboard.text=selection.text.trim() + separator + pasteboard.text.trim();
            }
            else {
                pasteboard.text=pasteboard.text.trim() + separator + selection.text.trim();
            }
        }
    }    
    return extension
})