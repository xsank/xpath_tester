from flask import Flask
from flask import request
from flask import render_template
from lxml import html
from lxml.etree import XPathEvalError

from util import transfer_element_to_string

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/check', methods=['POST'])
def check():
    raw_html = request.form['rawHtml']
    xpath_str = request.form['xpathString']
    tree = html.fromstring(raw_html)
    try:
        res = transfer_element_to_string(tree.xpath(xpath_str))
    except XPathEvalError:
        res = "invalid xpath expression"
    return res


if __name__ == "__main__":
    app.run()
