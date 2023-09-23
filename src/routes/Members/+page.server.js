/* eslint-disable no-empty-pattern */
import PocketBase from 'pocketbase';

export async function load({}){
    const pb = new PocketBase("https://techwe.me/");

    const records = await pb.collection('Execom_Socials').getFullList({
        sort: '-Order',
    });
    // console.log(records);


    const results = records.map((record)=> {return {Name:record.Name,Role:record.Role,Instagram:record.Instagram,LinkedIn:record.LinkedIn,Team:record.Team,Image_Link:record.Image_Link,Order:record.Order}});
    return{
        records: results
    }

}