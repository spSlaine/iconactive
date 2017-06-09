/// <binding />
/*global module */
module.exports = function (grunt) {
    'use strict';

    
    grunt.initConfig({
        // read in the project settings from the package.json file into the pkg property
        bower: {
            install: {
                options: {
                    targetDir: "<%= baseDir %>",
                    layout: "byComponent",
                    install: true,
                    verbose: false,
                    cleanTargetDir: false,
                    cleanBowerDir: false,
                    bowerOptions: {}
                }
            }
        },
        sass: {
            dev: {
                options: {
                    style: "expanded"
                },
                files: {
                    "dist/iconactive.css": "iconactive.scss"
                }
            },
            dist: {
                options: {
                    style: "compressed"
                },
                files: {
                    "dist/iconactive.min.css": "iconactive.scss"
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-sass");

    grunt.registerTask('default', ['sass:dev']);
};