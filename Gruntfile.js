module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: { 
      site: {
        files: [
          '_includes/*.html',
          '_layouts/*.html',
          '_posts/*.markdown',
          '_config.yml',
          '*.md',
          'js/*.js',
          'index.html'
        ],
        tasks: ['shell:jekyllBuild'],
        options: {
          interrupt: true,
          atBegin: true,
          livereload: true
        }
      },
      css: {
        files: '_scss/**/*.scss',
        tasks: ['sass', 'autoprefixer', 'shell:jekyllBuild'],
        options: {
          livereload: true
        }
      },
      svg: {
        files: 'svg/*.svg',
        tasks: ['svgstore','shell:jekyllBuild']
      }
    },
    shell: {
        jekyllBuild: {
            command: 'jekyll build'
        },
        jekyllServe: {
            command: 'jekyll serve'
        }
    },
    sass: {
      development: {
        files: {
        // 'result.file': 'source.file'
        'css/main-unprefixed.css': '_scss/main.scss'
        } 
      }
    },
    autoprefixer: {
        dist: {
          files: {
              'css/main.css': 'css/main-unprefixed.css'
          }
        }
    },
    svgstore: {
        options: {
          prefix: "icon--",
          cleanup: ['fill'],
          svg: {
            style: "display: none;"
          }
        },
        default: {
          files: {
            "svg/svg-defs.svg" : ["svg/*.svg"]
          }
        }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-svgstore');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  
  grunt.registerTask('default', ['shell']);

};