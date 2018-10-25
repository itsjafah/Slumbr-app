Bed.create(bed_type: "Air Mattress", size: "Twin", price: 20, image:"https://i.imgur.com/eBMXUbX.png")
Bed.create(bed_type: "Air Mattress", size: "Full", price: 30, image:"https://i.imgur.com/U92wyel.png")
Bed.create(bed_type: "Air Mattress", size: "Queen", price: 50, image:"https://i.imgur.com/2jkitjA.png")
Bed.create(bed_type: "Air Mattress", size: "King", price: 65, image:"https://i.imgur.com/H7soVZU.png")

Host.create(name: "Johrten", street_address: "63 5th Ave", city: "New York City", state: "NY", zip: 10003, email: "Johrten@flatironschool.com")
Host.create(name: "Jordan", street_address: "109 1st Ave", city: "New York City", state: "NY", zip: 10021, email: "Jordan@flatironschool.com")
Host.create(name: "Charlie", street_address: "3 19th St", city: "New York City", state: "NY", zip: 10081, email: "Charlie@flatironschool.com")
Host.create(name: "Brooke", street_address: "4 160th St", city: "New York City", state: "NY", zip: 10431, email: "Brooke@flatironschool.com")
Host.create(name: "Matt", street_address: "657 23rd St", city: "New York City", state: "NY", zip: 10211, email: "Matt@flatironschool.com")

Order.create(bed_id: 1, host_id: 2, pillows: 4, extra_sheets: true, start_date: "2018/10/31", end_date: "2018/11/02", total_price: 200)
Order.create(bed_id: 2, host_id: 1, pillows: 2, extra_sheets: false, start_date: "2018/11/11" , end_date: "2018/11/15", total_price: 150)
Order.create(bed_id: 3, host_id: 1, pillows: 2, extra_sheets: false, start_date: "2018/11/20" , end_date: "2018/11/28", total_price: 500)
