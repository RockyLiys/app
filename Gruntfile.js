module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> author: <%= pkg.author %>  */\n',
      	footer:'\n/*! <%= pkg.name %> lastest update time： <%= grunt.template.today("yyyy-mm-dd") %> */',
      	commpress: true,
      	report: 'gzip'
      },
      build: {
        src: 'dist/js/*.js',
        dest: 'dist/build/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
    	options: {
    	
    	}
    }
  });
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  // Default task(s).
  grunt.registerTask('default', ['uglify']);
};
