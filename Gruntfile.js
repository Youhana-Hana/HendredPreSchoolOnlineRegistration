module.exports = function(grunt) {
// Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	jshint: {
		// define the files to lint
		files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
		// configure JSHint (documented at http://www.jshint.com/docs/)
		options: {
		// more options here if you want to override JSHint defaults
			globals: {
			jQuery: true,
			console: true,
			module: true
			}
		}
	},
	concat: {
		options: {
			separator: ';'
		},
		dist: {
			src: ['src/**/*.js'],
			dest: 'lib/<%= pkg.name %>.js'
		}
	},
	uglify: {
		options: {
			banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
		dist: {
			files: {
				'lib/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
			}
		}
    }
});

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  

  // Default task(s).
  grunt.registerTask('default', ['jshint','concat', 'uglify']);
};