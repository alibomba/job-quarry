type MyApplicationUser = {
    _id: string,
    offer: {
        _id: string,
        title: string,
        salary: number,
        company: {
            _id: string,
            logo?: string
        }
    },
    status: string
}