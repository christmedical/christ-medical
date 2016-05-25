/**
 * Created by jameym on 5/24/16.
 */

var Vue = require('vue');

class Utils {
    static get author() {
        return "Jamey McElveen <jamey@mcelveen.us>";
    }

    static registerComponents(comps) {
        for(let comp in comps) {
            Vue.component(comp.name, comp);
        }

    }

}

module.exports = Utils;