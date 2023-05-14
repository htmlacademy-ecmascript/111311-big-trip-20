const tripPointsStub = [
  {
    'id': '443ef666-64c1-4e5d-8292-9598e0a2923d',
    'base_price': 5000,
    'date_from': '2024-03-06T00:28:01.397Z',
    'date_to': '2024-03-07T14:28:01.397Z',
    'destination': 'bf0e7210-5e56-4483-8a5f-c5dd5a50d618',
    'is_favorite': false,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '26ac5d88-4271-4de7-91a4-cd3fa0ddd0e3',
    'base_price': 6676,
    'date_from': '2024-03-07T14:28:01.397Z',
    'date_to': '2024-03-07T20:28:01.397Z',
    'destination': '3cabe659-3e79-4e48-950f-2b52e1592213',
    'is_favorite': false,
    'offers': [
      '17a37b37-3910-4198-a53b-89c97dbec5c3',
      'b463b134-3032-45c8-8e35-997295123124',
      'b1288346-cb13-4c07-b05b-c59cfdb75879',
      'f308595a-947d-4912-a9b1-ba9cd4e1a0e4'
    ],
    'type': 'taxi'
  },
  {
    'id': '4d72d717-34fe-4a7a-864f-1c2a916dcb41',
    'base_price': 4662,
    'date_from': '2024-03-07T20:28:01.397Z',
    'date_to': '2024-03-09T15:28:01.397Z',
    'destination': '3cabe659-3e79-4e48-950f-2b52e1592213',
    'is_favorite': true,
    'offers': [],
    'type': 'drive'
  },
  {
    'id': '392e5f81-c962-4382-8611-9df8549717d2',
    'base_price': 1399,
    'date_from': '2024-03-09T15:28:01.397Z',
    'date_to': '2024-03-10T11:28:01.397Z',
    'destination': '3cabe659-3e79-4e48-950f-2b52e1592213',
    'is_favorite': false,
    'offers': [
      '1c13d7c7-d86d-41c8-b432-e4fb806fa6b5',
      'aa74e8a1-dad5-4052-8cb5-513d2f5e353a',
      '08b4ae88-0ec7-47ee-b3c1-ae651afe33d0'
    ],
    'type': 'ship'
  },
  {
    'id': 'e2319c25-5cf4-4dc6-b14b-310dcf6aff1e',
    'base_price': 7320,
    'date_from': '2024-03-10T11:28:01.397Z',
    'date_to': '2024-03-10T19:28:01.397Z',
    'destination': '3cabe659-3e79-4e48-950f-2b52e1592213',
    'is_favorite': true,
    'offers': [
      'a8c2ffb1-5154-453d-a1bf-fecdd368fa39'
    ],
    'type': 'check-in'
  },
  {
    'id': 'd49b4dc4-3eab-4168-ad4b-2c16ae7ffe7c',
    'base_price': 7449,
    'date_from': '2024-03-10T19:28:01.397Z',
    'date_to': '2024-03-11T03:28:01.397Z',
    'destination': 'bf0e7210-5e56-4483-8a5f-c5dd5a50d618',
    'is_favorite': true,
    'offers': [
      'c6758844-e150-474d-a6aa-260769ebc7f3',
      'ec5c7908-3238-4dbf-9711-626040df9b44',
      'b9ee1997-9253-497d-8720-2719b53ae121',
      'ffd6bfea-ba8f-478e-8a3c-2fcbefa079f6',
      'a8c2ffb1-5154-453d-a1bf-fecdd368fa39'
    ],
    'type': 'check-in'
  },
  {
    'id': '0eb1acf7-936a-4de2-9989-f167742182a1',
    'base_price': 2547,
    'date_from': '2024-03-11T03:28:01.397Z',
    'date_to': '2024-03-12T11:28:01.397Z',
    'destination': '2d33ec7f-fe16-4cfd-81fe-e5fd63814c09',
    'is_favorite': true,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '0468b6bb-9aa0-4982-abf7-68a9049aa611',
    'base_price': 6842,
    'date_from': '2024-03-12T11:28:01.397Z',
    'date_to': '2024-03-13T08:28:01.397Z',
    'destination': 'bf0e7210-5e56-4483-8a5f-c5dd5a50d618',
    'is_favorite': true,
    'offers': [
      'ed38d0fa-b01c-46af-bcb1-e9ddde2c1ae8',
      'ef39c023-121a-41e9-9492-d547605b9906'
    ],
    'type': 'drive'
  },
  {
    'id': 'cff0d2c8-4edf-4cb8-8fc4-1598bcf66e14',
    'base_price': 2951,
    'date_from': '2024-03-13T08:28:01.397Z',
    'date_to': '2024-03-14T00:28:01.397Z',
    'destination': '3cabe659-3e79-4e48-950f-2b52e1592213',
    'is_favorite': true,
    'offers': [],
    'type': 'bus'
  },
  {
    'id': 'e46d087c-9d68-4d94-a71c-593ebb9588a7',
    'base_price': 5412,
    'date_from': '2024-03-14T00:28:01.397Z',
    'date_to': '2024-03-15T11:28:01.397Z',
    'destination': '2d33ec7f-fe16-4cfd-81fe-e5fd63814c09',
    'is_favorite': false,
    'offers': [],
    'type': 'restaurant'
  },
  {
    'id': 'ac0879e9-1d52-4505-a01f-d74e8b0861c5',
    'base_price': 3124,
    'date_from': '2024-03-15T11:28:01.397Z',
    'date_to': '2024-03-17T01:28:01.397Z',
    'destination': '945b578b-c40d-41ea-a1b3-6a64a8244fea',
    'is_favorite': true,
    'offers': [
      '29ace3ca-9735-4f51-973e-a00cba530561',
      'de0c270f-4e05-4f79-b4ad-2d941aeca9b4',
      'a3f0543b-d85d-492e-adba-4bf10392c86e',
      '1c13d7c7-d86d-41c8-b432-e4fb806fa6b5',
      'aa74e8a1-dad5-4052-8cb5-513d2f5e353a',
      '08b4ae88-0ec7-47ee-b3c1-ae651afe33d0'
    ],
    'type': 'ship'
  },
  {
    'id': '7f201388-9fc7-4455-95aa-275f94e00e84',
    'base_price': 539,
    'date_from': '2024-03-17T01:28:01.397Z',
    'date_to': '2024-03-18T06:28:01.397Z',
    'destination': 'e0840553-931f-4cf5-8a5e-2f2e1574a522',
    'is_favorite': true,
    'offers': [
      'b463b134-3032-45c8-8e35-997295123124',
      'b1288346-cb13-4c07-b05b-c59cfdb75879',
      'f308595a-947d-4912-a9b1-ba9cd4e1a0e4'
    ],
    'type': 'taxi'
  },
  {
    'id': 'acec14ea-3cbf-4b61-a3c5-836ce7875d9e',
    'base_price': 6062,
    'date_from': '2024-03-18T06:28:01.397Z',
    'date_to': '2024-03-19T04:28:01.397Z',
    'destination': 'e0840553-931f-4cf5-8a5e-2f2e1574a522',
    'is_favorite': false,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '616883f4-6b1e-40b7-9246-ae678931bbca',
    'base_price': 4925,
    'date_from': '2024-03-19T04:28:01.397Z',
    'date_to': '2024-03-20T13:28:01.397Z',
    'destination': '3cabe659-3e79-4e48-950f-2b52e1592213',
    'is_favorite': false,
    'offers': [
      'aff802f9-3113-4fe2-9914-e00574a1ec40',
      '54785bef-ead0-4b36-9c2b-337caa438db8',
      '83be45ae-34d9-4b8e-95dc-ac72e4af20a6'
    ],
    'type': 'flight'
  },
  {
    'id': '192b4a61-e9b2-4d0b-b067-4af0fdfa9593',
    'base_price': 403,
    'date_from': '2024-03-20T13:28:01.397Z',
    'date_to': '2024-03-21T01:28:01.397Z',
    'destination': 'bf0e7210-5e56-4483-8a5f-c5dd5a50d618',
    'is_favorite': false,
    'offers': [
      'd5132df6-d93b-4f4c-bc3e-8599e53ccbe1',
      'aff802f9-3113-4fe2-9914-e00574a1ec40',
      '54785bef-ead0-4b36-9c2b-337caa438db8',
      '83be45ae-34d9-4b8e-95dc-ac72e4af20a6'
    ],
    'type': 'flight'
  },
  {
    'id': 'c15c90b6-3694-4105-9b23-1e51325bce9a',
    'base_price': 5926,
    'date_from': '2024-03-21T01:28:01.397Z',
    'date_to': '2024-03-22T14:28:01.397Z',
    'destination': '945b578b-c40d-41ea-a1b3-6a64a8244fea',
    'is_favorite': false,
    'offers': [
      '72583523-69a9-4668-9a7f-0192fbef6a83',
      '96955675-06d2-40b6-b15a-de6ab73fa2b2'
    ],
    'type': 'restaurant'
  },
  {
    'id': '7898bcea-73b1-4967-a90a-432fd3d03f68',
    'base_price': 6000,
    'date_from': '2024-03-22T14:28:01.397Z',
    'date_to': '2024-03-23T16:28:01.397Z',
    'destination': '3cabe659-3e79-4e48-950f-2b52e1592213',
    'is_favorite': false,
    'offers': [],
    'type': 'restaurant'
  },
  {
    'id': '83425617-4830-4b99-9644-b9fa2c54e1e8',
    'base_price': 843,
    'date_from': '2024-03-23T16:28:01.397Z',
    'date_to': '2024-03-24T03:28:01.397Z',
    'destination': '945b578b-c40d-41ea-a1b3-6a64a8244fea',
    'is_favorite': false,
    'offers': [],
    'type': 'train'
  },
  {
    'id': '6f898123-9efb-4599-bc06-0533de45256d',
    'base_price': 96,
    'date_from': '2024-03-24T03:28:01.397Z',
    'date_to': '2024-03-25T22:28:01.397Z',
    'destination': '2d33ec7f-fe16-4cfd-81fe-e5fd63814c09',
    'is_favorite': false,
    'offers': [
      'de0c270f-4e05-4f79-b4ad-2d941aeca9b4',
      'a3f0543b-d85d-492e-adba-4bf10392c86e',
      '1c13d7c7-d86d-41c8-b432-e4fb806fa6b5',
      'aa74e8a1-dad5-4052-8cb5-513d2f5e353a',
      '08b4ae88-0ec7-47ee-b3c1-ae651afe33d0'
    ],
    'type': 'ship'
  },
  {
    'id': 'f813ba2d-6553-4b69-9b81-263050caf778',
    'base_price': 1070,
    'date_from': '2024-03-25T22:28:01.397Z',
    'date_to': '2024-03-27T02:28:01.397Z',
    'destination': '3cabe659-3e79-4e48-950f-2b52e1592213',
    'is_favorite': true,
    'offers': [
      'f308595a-947d-4912-a9b1-ba9cd4e1a0e4'
    ],
    'type': 'taxi'
  },
  {
    'id': 'fa1c607c-4a0a-4558-b472-fe2baf6fa071',
    'base_price': 3198,
    'date_from': '2024-03-27T02:28:01.397Z',
    'date_to': '2024-03-28T08:28:01.397Z',
    'destination': '2d33ec7f-fe16-4cfd-81fe-e5fd63814c09',
    'is_favorite': true,
    'offers': [
      '72583523-69a9-4668-9a7f-0192fbef6a83',
      '96955675-06d2-40b6-b15a-de6ab73fa2b2'
    ],
    'type': 'restaurant'
  },
  {
    'id': 'd0cdd7f8-36ca-48d8-bdc1-5a5188b0e847',
    'base_price': 7931,
    'date_from': '2024-03-28T08:28:01.397Z',
    'date_to': '2024-03-29T17:28:01.397Z',
    'destination': '2d33ec7f-fe16-4cfd-81fe-e5fd63814c09',
    'is_favorite': false,
    'offers': [],
    'type': 'taxi'
  },
  {
    'id': 'eb9c5ed6-ffc2-4859-9e91-95b39ba20ea9',
    'base_price': 421,
    'date_from': '2024-03-29T17:28:01.397Z',
    'date_to': '2024-03-30T00:28:01.397Z',
    'destination': 'bf0e7210-5e56-4483-8a5f-c5dd5a50d618',
    'is_favorite': false,
    'offers': [
      '83be45ae-34d9-4b8e-95dc-ac72e4af20a6'
    ],
    'type': 'flight'
  },
  {
    'id': 'cbc5f954-0a51-481a-a8f6-c54fcca750d5',
    'base_price': 1991,
    'date_from': '2024-03-30T00:28:01.397Z',
    'date_to': '2024-03-31T14:28:01.397Z',
    'destination': 'bf0e7210-5e56-4483-8a5f-c5dd5a50d618',
    'is_favorite': true,
    'offers': [],
    'type': 'check-in'
  },
  {
    'id': '6059ee05-56da-4481-9c79-ba48903d7f8e',
    'base_price': 1718,
    'date_from': '2024-03-31T14:28:01.397Z',
    'date_to': '2024-04-01T14:28:01.397Z',
    'destination': 'e0840553-931f-4cf5-8a5e-2f2e1574a522',
    'is_favorite': true,
    'offers': [
      'ef39c023-121a-41e9-9492-d547605b9906'
    ],
    'type': 'drive'
  }
];

export {tripPointsStub};
