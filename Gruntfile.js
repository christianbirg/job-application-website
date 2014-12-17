module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        sourcemap: true,
      },
      'js-uglify': {
        files: {
          'public_html/js/libs.js': [
            'src/libs/jquery/dist/jquery.js',
            'src/libs/requirejs/require.js',
            'src/libs/requirejs-text/text.js',
            'src/libs/bootstrap-sass-official/assets/javascripts/bootstrap.js',
            'src/libs/angular/angular.js',
            'src/libs/angular-route/angular-route.min.js',
            'src/libs/angular-sanitize/angular-sanitize.min.js',
            'src/libs/angular-xeditable/dist/js/xeditable.min.js'
          ]
        }
      }
    },
    sass: {
      'sass-compile': {
        options: {
          style: 'compressed'
        },
        files: {
          'public_html/css/style.css': ['src/sass/style.scss'],
        }
      }
    },
    watch: {
      scripts: {
        options: {
          spawn: false,
        },
        files: ['src/sass/*.scss'],
        tasks: ['sass'],
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify', 'sass', 'watch']);

};
