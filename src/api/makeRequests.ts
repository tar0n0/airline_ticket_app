export class MakeRequest {
    private baseUrl: string;

    constructor(baseUrl: string) {
        if (!baseUrl) {
            throw new Error('Base URL is required');
        }

        this.baseUrl = baseUrl;
    }

    async getJson<T>(url: string): Promise<T> {
        try {
            const response: Response = await fetch(`${this.baseUrl}${url}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json() as T;
        } catch (error: any) {
            this.handleError(error);
            throw error;
        }
    }

    async postJson<T>(url: string, data: any): Promise<T> {
        try {
            const response: Response = await fetch(`${this.baseUrl}${url}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json() as T;
        } catch (error: any) {
            this.handleError(error);
            throw error;
        }
    }

    async putJson<T>(url: string, data: any): Promise<T> {
        try {
            const response: Response = await fetch(`${this.baseUrl}${url}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json() as T;
        } catch (error: any) {
            this.handleError(error);
            throw error;
        }
    }

    async deleteJson<T>(url: string): Promise<void> {
        try {
            const response: Response = await fetch(`${this.baseUrl}${url}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        } catch (error: any) {
            this.handleError(error);
            throw error;
        }
    }

    private handleError(error: Error): void {
        console.error('An error occurred:', error.message);
    }
}
