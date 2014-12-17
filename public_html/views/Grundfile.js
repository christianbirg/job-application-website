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
          'public_html/js/script.js': [
          'src/libs/jquery/dist/jquery.js',
          'src/js/*.js'
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
          'public_html/css/style.css': ['src/sass/*.scss'],
        }
      }
    },
    watch: {
      sass: {
        scripts: {
          options: {
            spawn: false,
          },
          files: ['src/sass/*.scss'],
          tasks: ['uglify'],
        }
      },
      js: {
        scripts: {
          options: {
            spawn: false,
          },
          files: ['src/js/*.js', 'src/libs/*.js'],
          tasks: ['uglify'],
        }
      }
    },
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      watch: {
        tasks: ["watch:sass", "watch:js"]
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass', 'watch']);
  grunt.registerTask('watcher', ['concurrent:watch']);

};
