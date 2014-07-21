module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["./bower_components/bootstrap/less"]
                },
                files: {
                    "./css/style.css": "./css/style.less"
                }
            }
        },
        cssmin: {
            'dist': {
                'src': 'css/style.css',
                'dest': 'css/style.min.css'
            }
        },        
        watch: {
            files: "./css/style.less",
            tasks: ["less"]
        }

    });
    grunt.loadNpmTasks('grunt-yui-compressor');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
};