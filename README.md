# Sharpend Agency - Website information
---

### Adding blog posts

1. Go to prose.io and connect your github account. 
2. Navigate to the _posts/things folder
3. Click the 'new file' button
4. At the very top add the blog post title
5. On the right click the meta data button
6. Choose the blog type (let me know the complete list of types and I'll add them)
7. Select the author
8. Add any other meta data that will help for search engines
9. Click done
10. To add images click the image button in the editor toolbar. Then click the 'selecting one' link and choose your image. Once selected change the image url to img/the_image_name.jpg. Add the alternative text and then click insert.
11. To add videos use the code below. Be sure to fill in the relevant bits eg. id="vimeo_id_here" etc etc...
12. When complete click the save button on the right
13. Review your changes and the click 'commit' when happy.
14. Your post has been saved but not published. To publish leave the post editor and go back to it again and the publish button will appear in the toolbar. Click it and your post will appear in a few minutes.


### Adding videos to blog posts
Use the following snippet

'''
{% include video.html id="119151174" title="This is the video title" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum sint amet quaerat animi soluta ducimus enim deleniti quas porro est." %}
'''

### Unpublishing and publishing pages
To unpublish a page without deleting the .md file add it to the exclude parameter in the _config.yml file in the root of the project.

For example:
```exclude: [node_modules, svg, Gruntfile.js, CNAME, leadership.md, README.md]```

Any files inside the square brackets will not be built to the site. You can also do this for posts..

For example the line below would hide dot3 from the partners page:
```exclude: [node_modules, svg, Gruntfile.js, CNAME, leadership.md, README.md, _posts/partners/15-03-04-dot3.md]```

If you need to reactivate just remove it from inside the brackets.