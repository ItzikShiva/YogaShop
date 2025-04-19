import { Product } from '../types/Product';

// Your Amazon Associate tag
const AFFILIATE_TAG = 'spiritual00bc-20';

export const products: Product[] = [
    {
        id: '1',
        title: 'Gaiam Essentials Yoga Mat',
        description: 'Thick Yoga Mat Fitness & Exercise Mat with Easy-Cinch Yoga Mat Carrier Strap',
        imageUrl: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&q=80',
        amazonUrl: `https://www.amazon.com/Gaiam-Essentials-Thick-Yoga-Mat/dp/B07MSJVBNQ/ref=sr_1_1?tag=${AFFILIATE_TAG}`,
        price: '$21.99',
        category: 'Mats',
        hebrewTitle: 'מזרן יוגה Gaiam Essentials',
        hebrewDescription: 'מזרן יוגה עבה עם רצועת נשיאה'
    },
    {
        id: '2',
        title: 'Gaiam Yoga Blocks 2 Pack',
        description: 'Supportive Latex-Free EVA Foam Soft Non-Slip Surface for Yoga',
        imageUrl: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=500&q=80',
        amazonUrl: `https://www.amazon.com/Gaiam-Essentials-Yoga-Block-2-Pack/dp/B075C3Z3NH/ref=sr_1_1?tag=${AFFILIATE_TAG}`,
        price: '$19.99',
        category: 'Props',
        hebrewTitle: 'זוג קוביות יוגה Gaiam',
        hebrewDescription: 'קוביות יוגה תומכות מקצף EVA ללא לטקס עם משטח נגד החלקה'
    },
    {
        id: '3',
        title: 'Brentwood Home Crystal Cove Meditation Pillow',
        description: 'Oval Yoga Cushion, Buckwheat Fill, Certified GOTS Organic Cotton',
        imageUrl: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=500&q=80',
        amazonUrl: `https://www.amazon.com/Brentwood-Home-Crystal-Meditation-Pillow/dp/B078K6K6K1/ref=sr_1_1?tag=${AFFILIATE_TAG}`,
        price: '$49.99',
        category: 'Meditation',
        hebrewTitle: 'כרית מדיטציה Crystal Cove',
        hebrewDescription: 'כרית יוגה אובלית, מילוי כוסמת אורגנית מוסמכת GOTS'
    },
    {
        id: '4',
        title: 'Pete\'s Choice Dharma Yoga Wheel',
        description: 'Premium Back Roller Wheel for Back Pain and Improving Backbends',
        imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80',
        amazonUrl: `https://www.amazon.com/Petes-Choice-Dharma-Yoga-Wheel/dp/B0821R3FD9/ref=sr_1_1?tag=${AFFILIATE_TAG}`,
        price: '$39.97',
        category: 'Props',
        hebrewTitle: 'גלגל יוגה דהרמה',
        hebrewDescription: 'גלגל גב פרימיום להקלה על כאבי גב ושיפור כפיפות לאחור'
    },
    {
        id: '5',
        title: 'CVNC Tibetan Singing Bowl',
        description: '8 Inch Meditation Sound Bowl with Mallet and Cushion for Meditation',
        imageUrl: 'https://images.unsplash.com/photo-1618310126779-c7f080d2e2f1?w=500&q=80',
        amazonUrl: `https://www.amazon.com/CVNC-Tibetan-Singing-Bowl-Meditation/dp/B07SGJVQCM/ref=sr_1_1?tag=${AFFILIATE_TAG}`,
        price: '$39.99',
        category: 'Meditation',
        hebrewTitle: 'קערה טיבטית מצלצלת',
        hebrewDescription: 'קערת מדיטציה 8 אינץ\' עם פטיש וכרית למדיטציה'
    },
    {
        id: '6',
        title: 'SANKUU Yoga Strap',
        description: '8ft Yoga Strap for Stretching with Adjustable D-Ring Buckle',
        imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80',
        amazonUrl: `https://www.amazon.com/SANKUU-Stretching-Exercise-Flexibility-Physical/dp/B07PLWG2YF/ref=sr_1_1?tag=${AFFILIATE_TAG}`,
        price: '$15.99',
        category: 'Props',
        hebrewTitle: 'רצועת יוגה SANKUU',
        hebrewDescription: 'רצועת יוגה 8 רגל למתיחות עם אבזם D מתכוונן'
    }
]; 