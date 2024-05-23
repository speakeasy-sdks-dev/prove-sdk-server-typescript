/**
 * Utilities to read environment variables
 */
export function reqEnv(name: string, defaultValue?: string): string {
    const v = process.env[name]
    if (v === undefined) {
        if (defaultValue === undefined) {
            throw new Error(`process.env.${name} is required but not set`)
        } else {
            return defaultValue
        }
    } else {
        return v
    }
}

export function optEnv(name: string): string | undefined {
    return process.env[name]
}
