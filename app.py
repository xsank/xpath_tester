from flask import Flask
from flask import request
from flask import render_template
from lxml import html

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/check', methods=['POST'])
def check():
    raw_html = request.form['rawHtml']
    xpath_str = request.form['xpathString']
    tree = html.fromstring(raw_html)
    return str(tree.xpath(xpath_str))


if __name__ == "__main__":
    app.run()
