from lxml.html import HtmlElement, tostring


def transfer_element_to_string(element):
    res = []
    for e in element:
        if isinstance(e, HtmlElement):
            res.append(tostring(e, pretty_print=True))
        else:
            res.append(str(e))
    return str(res)
