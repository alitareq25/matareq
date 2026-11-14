# Mohammad Ali Tareq · Academic portfolio

A static portfolio for matareq.com. Each page is served from its directory’s index.html, with a shared navigation and footer design. Styles and local fonts are in assets/. The small script adds the publication topic filters.

## Preview locally

Run `python3 -m http.server 8000` from this directory and open http://localhost:8000/.

## Upload with cPanel

1. In File Manager, open the document root for matareq.com. For a primary domain, this is usually public_html.
2. Back up the existing site and enable Show Hidden Files so you can see .htaccess. If you already have an .htaccess file, preserve your host's SSL and redirect settings and add the two directives from this project as appropriate.
3. Upload and extract the deployment ZIP directly into that document root. When using the GitHub source ZIP, enter its enclosing folder and move the website files and assets/ into the document root.
4. Confirm that index.html and assets/ are next to each other. Check the homepage over HTTPS, the publications filters and a missing page. Delete the uploaded ZIP from the document root once checked.

## Sources

- Profile and academic history: supplied CV and [Universiti Malaya](https://umexpert.um.edu.my/ali_tareq).
- Five selected publications: publisher DOI links in index.html.
- Academic portfolio reference sites: [Aswath Damodaran](https://pages.stern.nyu.edu/adamodar/New_Home_Page/home.htm) and [John H. Cochrane](https://johncochrane.sites.stanford.edu/).
- Responsive layout and text contrast references: [W3C reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow) and [W3C contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html).
- Hosting reference: [cPanel File Manager](https://docs.cpanel.net/cpanel/files/file-manager/110/).
- DM Sans is self-hosted. Its OFL text is in assets/.

## Deploy with cPanel Git Version Control

In cPanel, open Git Version Control and create a clone of
https://github.com/alitareq25/matareq.git outside public_html, for example at
repositories/matareq. Open Manage → Pull or Deploy, select Update from Remote
when new commits are available, and then select Deploy HEAD Commit.

The deployment writes the site files into the main domain's public_html.
It preserves existing .htaccess and leaves unrelated files in place.
