module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'css'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['compass'],
        options: {
          livereload: {
            port: 9000
          }
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);
}
