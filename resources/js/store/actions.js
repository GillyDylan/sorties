// All global Action to store
const actions = {
    /*
     * Change Title from Sotre state
     */
    changeTitle ( { commit }, title ) {
        commit( 'changeTitle', title )
    }
}

export default actions