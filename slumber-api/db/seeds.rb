Bed.create(bed_type: "Memory Foam", size: "Twin", price: 50)
Bed.create(bed_type: "Memory Foam", size: "Full", price: 75)
Bed.create(bed_type: "Memory Foam", size: "Queen", price: 125)
Bed.create(bed_type: "Memory Foam", size: "King", price: 150)
Bed.create(bed_type: "Memory Foam", size: "California King", price: 200)

Bed.create(bed_type: "Spring", size: "Twin", price: 50)
Bed.create(bed_type: "Spring", size: "Full", price: 75)
Bed.create(bed_type: "Spring", size: "Queen", price: 125)
Bed.create(bed_type: "Spring", size: "King", price: 150)
Bed.create(bed_type: "Spring", size: "California King", price: 200)

Bed.create(bed_type: "Cot", size: "Twin", price: 20)

Bed.create(bed_type: "Air", size: "Twin", price: 30)
Bed.create(bed_type: "Air", size: "Full", price: 40)
Bed.create(bed_type: "Air", size: "Queen", price: 80)
Bed.create(bed_type: "Air", size: "King", price: 110)

Host.create(name: "Johrten", street_address: "63 5th Ave", city: "New York City", state: "NY", zip: 10003, email: "Johrten@flatironschool.com")

Host.create(name: "Jordan", street_address: "109 1st Ave", city: "New York City", state: "NY", zip: 10021, email: "Jordan@flatironschool.com")

Host.create(name: "Charlie", street_address: "3 19th St", city: "New York City", state: "NY", zip: 10081, email: "Charlie@flatironschool.com")


Host.create(name: "Brooke", street_address: "4 160th St", city: "New York City", state: "NY", zip: 10431, email: "Brooke@flatironschool.com")

Host.create(name: "Matt", street_address: "657 23rd St", city: "New York City", state: "NY", zip: 10211, email: "Matt@flatironschool.com")

Order.create(bed_id: 1, host_id: 2, pillows: 4, extra_sheets: true, start_date: "2018/10/31", end_date: "2018/11/02", total_price: 200)

Order.create(bed_id: 2, host_id: 1, pillows: 2, extra_sheets: false, start_date: "2018/11/11" , end_date: "2018/11/15", total_price: 150)

Order.create(bed_id: 3, host_id: 1, pillows: 2, extra_sheets: false, start_date: "2018/11/20" , end_date: "2018/11/28", total_price: 500)

Order.create(bed_id: 4, host_id: 4, pillows: 6, extra_sheets: true, start_date: "2018/12/05" , end_date: "2018/12/15", total_price: 600)

Order.create(bed_id: 3, host_id: 5, pillows: 2, extra_sheets: false, start_date: "2018/12/20" , end_date: "2018/12/21", total_price: 100)

Order.create(bed_id: 5, host_id: 3, pillows: 4, extra_sheets: true, start_date: "2018/12/02" , end_date: "2018/12/10", total_price: 750)
