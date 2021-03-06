module.exports = function (grunt) {


	grunt.initConfig({


		watch: {
			css: {
				files: 'src/less/**/*.less',
				tasks: ['less']
			}
		},


		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'src/css/*.css',
						'src/js/**/*.js',
						'**/*.{html,php}'
					]
				},
				options: {
					watchTask: true
				}
			}
		},


		less: {
			development: {
				options: {
					paths: ['src/less']
				},
				files: {
					"src/css/main.css" : "src/less/main.less"
				}
			},
			production: {
				options: {
					paths: ['src/css']
				},
				files: {
					"src/css/main.css" : "src/less/main.less"
				}
			}
		},

		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'src/_img',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'src/img'
				}]
			}
		}

	});


	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['browserSync', 'watch', 'less']);
	grunt.registerTask('images', ['imagemin']);


}