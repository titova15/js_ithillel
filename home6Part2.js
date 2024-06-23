const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
      {
        name: 'Клієнт 1',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків',
        partners: [
          {
            name: 'Клієнт 1.1',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
          },
          {
            name: 'Клієнт 1.2',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
              {
                name: 'Клієнт 1.2.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу квитків',
                sells: 'Рішення для продажу квитків',
              }
            ]
          }
        ]
      },
      {
        name: 'Клієнт 2',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків'
      }
    ]
  };
  
  function findValueByKey(company, companyName) {
    if (company.name === companyName) {
      return company;
    }
    
    if (company.clients) {
      for (let client of company.clients) {
        const result = findValueByKey(client, companyName);
        if (result) {
          return result;
        }
      }
    }
    
    if (company.partners) {
      for (let partner of company.partners) {
        const result = findValueByKey(partner, companyName);
        if (result) {
          return result;
        }
      }
    }
    
    return null;
  }
  
  const result = findValueByKey(company, 'Клієнт 1.2.3');
  if (result) {
    console.log('Компанія знайдена:', result);
  } else {
    console.log('Компанію не знайдено');
  }
  