<template>
    <div id="editor">
        <mavon-editor v-model="context" :ishljs = "true" style="height: 100%"></mavon-editor>
        <div><button @click="click">Click</button></div>
    </div>
</template>

<script>
// Local Registration
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
    name: 'editor',
    components: {
        mavonEditor
        // or 'mavon-editor': mavonEditor
    },
    data () {
    	return {
    		context: 'xxx'
    	}
    },
    methods: {
    	click () {
    		console.log(this.context)
    	},
    	$save: function () {
    		debugger
    		console.log("123")
    	}
    }
}
</script>
<style>
#editor {
    margin: auto;
    width: 80%;
	height: 580px;
}
</style>
