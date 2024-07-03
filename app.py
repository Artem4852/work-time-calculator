from flask import Flask, render_template
import requests, json

user_id = "recLx2cfKI9bH3hId"

def scrape_products():
    url = f"https://hackclub.com/_next/data/u5a0lJC0xX1_XKg0J1bHJ/arcade/{user_id}/shop.json?userAirtableID={user_id}"

    response = requests.get(url)
    products = response.json()

    with open("products.json", "w") as file:
        json.dump(products, file)

    products = products["pageProps"]["availableItems"]
    product_dicts = []
    for product in products:
        product_dicts.append({
            "name": product["Full Name"],
            "price": product["Cost Hours"],
            "max": product["Max Order Quantity"],
            "id": product["Full Name"].replace(" ", "_").lower(),
            "src": product["Image URL"]
        })
    
    return product_dicts

app = Flask(__name__)

@app.route("/")
def home():
    products = scrape_products()
    return render_template('indexTemplate.html', products=products)

if __name__ == "__main__":
    app.run(debug=False, port=5050)