export interface TShirtModel {
  product_id: number,
  image_front: string,
  image_back: string,
  product_name: string,
  price: number,
  stock: number
}

export const DataModel: TShirtModel[] = [
  {
    product_id: 1,
    image_front: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-e4971db1-d8f8-417d-88fb-bd18b6f191cf/sportswear-t-shirt-w9CHRW.jpg',
    image_back: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-e4971db1-d8f8-417d-88fb-bd18b6f191cf/sportswear-t-shirt-w9CHRW.jpg',
    product_name: 'Nike Sportswear',
    price: 11200,
    stock: 10
  },
  {
    product_id: 2,
    image_front: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-334f0d67-8ced-4cbb-b85d-07ada8192aab/korea-2020-stadium-away-football-shirt-DPgLP9.jpg',
    image_back: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-569da109-6598-4630-b068-6830abf5c006/korea-2020-stadium-away-football-shirt-DPgLP9.jpg',
    product_name: 'Korea 2020 Stadium Away',
    price: 3300,
    stock: 100
  },
  {
    product_id: 3,
    image_front: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-c96993e9-3d6e-42a7-b862-81971805de77/korea-long-sleeve-football-t-shirt-h8Z2v0.jpg',
    image_back: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-619b4f07-0a91-4589-beff-3a837a246320/korea-long-sleeve-football-t-shirt-h8Z2v0.jpg',
    product_name: 'Long-Sleeve Football',
    price: 12000,
    stock: 30
  },
  {
    product_id: 4,
    image_front: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-60ab112c-5c60-477a-ac96-5b3e82d25109/sportswear-t-shirt-f7X65n.jpg',
    image_back: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-0882b7a4-a3aa-4c5b-8efe-34edcc82a07d/sportswear-t-shirt-f7X65n.jpg',
    product_name: 'Nike Sportswear',
    price: 2020,
    stock: 10
  },{
    product_id: 5,
    image_front: 'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ptlf0bbdvgv6g2zrae52/nikecourt-tennis-t-shirt-l5PZ5c.jpg',
    image_back: 'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/kfnr8oikwkb45qyue8qk/nikecourt-tennis-t-shirt-l5PZ5c.jpg',
    product_name: 'NikeCourt',
    price: 100000,
    stock: 1000
  }
]
