# aws-ecr-semver
If you are using AWS ECR to store your docker images and those images have labels in the [semver](http://semver.org/) format then you can use this tool to query AWS (assuming you are already authenticated) retrieve the list of valid semver labels and the one that satisfies a semver pattern.

Consider installing this globally for ease of use.

`
npm install -g aws-ecr-semver
`

## Usage

```
  Usage: index.js [options] [command]

    Commands:

    help  Display help

  Options:

    -h, --help     Output usage information
    -r, --repo     The name of the repository in the registry to query for labels.
    -s, --semver   The semver comparator to use to pick the correct label
    -v, --version  Output the version number
```

## Output

The command outputs to stdout json formated data for the semver valid labels and the maximum label satisfying the semver pattern provided.

## Example
This example fails to match on the provided semver pattern and shows the single existing valid semver label present in the 'my-repo' registry.

```bash
aws-ecr-semver -r="my-repo" -s=^2.*
{"maxSatisfyingLabel":"","validLabels":["1.2.3"]}
```

## Tests

Run them with the command:

`
npm test
`

## TODO
* Mock out the AWS components to enable more tests to be written.
  These interactions have been tested manually so far.

## Contributing
Please feel free to submit PRs, but if you do please try to add a test for your new feature.)