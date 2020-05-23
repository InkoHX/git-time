import { exec } from 'child_process'
import { resolve } from 'path'
import { promisify } from 'util'

const execAsync = promisify(exec)

export type GitDiffFilter = 'A' | 'C' | 'D' | 'M' | 'R' | 'T' | 'U' | 'X' | 'B' | '*'

export default async function (filter: GitDiffFilter, path: string): Promise<Date> {
  const target = resolve(path)
  const { stderr, stdout } = await execAsync([
    'git',
    'log',
    '-1',
    '--follow',
    `--diff-filter=${filter}`,
    '--format=%ad',
    target
  ].join(' '))

  if (stderr) throw new Error(stderr)
  if (!stdout) throw new Error(`No date in "${target}"`)

  return new Date(stdout)
}
