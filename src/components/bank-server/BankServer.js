


class BankServer { 

   __url = 'https://www.cbr-xml-daily.ru/latest.js'; 

   getResourse = async (url)=>{ 
      let res = await fetch(url);
      if (!res.ok){ 
         console.log(`Error`);
         throw new Error (`Coult nod fetch ${url}, status: ${res.status}`)
      }
      console.log(`Connect`);
       return await res.json()
   }

   getPrice = async(id)=>{
      let res = await this.getResourse(this.__url);
      return this.__transformCharacter(res)
   }


   __transformCharacter = (res)=>{ 
      return { 
         // AUD: res.rates['AUD']
         EUR: res.rates['EUR'],
         JPY: res.rates['JPY'],
         USD: res.rates['USD']
         
         // name: char.name, 
         // description: char.description,
         // thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
         // homepage: char.urls[0].url,
         // wikipage: char.urls[1].url,
         // comicsData: char.comics
      }
      }

}


export default BankServer;