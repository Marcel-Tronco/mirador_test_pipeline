import Mirador from 'mirador'
import { miradorImageToolsPlugin } from 'mirador-image-tools';
import textOverlayPlugin from 'mirador-textoverlay/es';
// import downloadDialogPlugin from 'mirador-downloaddialog/es'

window.MiradorBundle = {
    Mirador,
    plugins: {
        miradorImageToolsPlugin,
        textOverlayPlugin,
        // downloadDialogPlugin
    }
};
