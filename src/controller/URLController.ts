import { Request, response, Response } from 'express';
import shortId from 'shortid'

export class URLController {
    public async shorten(req: Request, response: Response): Promise<void>

    console.log(req.body)
    const { originURL } = req.body
    const url = await URLModel.findOne({ originURL })
    if(url) {
        response.json(url)
        return
    } 
    const hash = shortId.generate()
    const shortURL = `${config.API_URL}/${hash}`
    URLModel.create({ hash, shortURL, originURL })
    response.json({ originURL, hash, shortURL }
}

public async redirect(req: Request, response: Response): Promise<void> {
    const { hash } = req.params

        const url = {
            "originURL": 'https://cloud.mongodb.com/v2/618c65860ba2dc598957b850#clusters',
            "hash": "CUSD3DgEB",
            shortURL: "http://localhost:5000/CUSD3DgEB"
        }
}
    response.redirect(url.originURL)
}