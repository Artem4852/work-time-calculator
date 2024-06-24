from flask import Flask, render_template
from scrape_products import scrape_products

app = Flask(__name__)

@app.route("/")
def home():
    products = scrape_products()
    return render_template('indexTemplate.html', products=products)

if __name__ == "__main__":
    app.run(debug=True)