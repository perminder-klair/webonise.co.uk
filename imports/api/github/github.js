import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class GithubCollection extends Mongo.Collection {
    insert(doc, callback) {
        const ourDoc = doc;
        ourDoc.createdAt = ourDoc.createdAt || new Date();
        return super.insert(ourDoc, callback);
    }
    update(selector, modifier) {
        return super.update(selector, modifier);
    }
    remove(selector) {
        return super.remove(selector);
    }
}

export const Github = new GithubCollection('github');

// Deny all client-side updates since we will be using methods to manage this collection
Github.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; }
});

Github.schema = new SimpleSchema({
    gitId: {
        type: String,
        max: 200
    },
    name: {
        type: String
    },
    full_name: {
        type: String
    },
    html_url: {
        type: String
    },
    git_url: {
        type: String
    },
    default_branch: {
        type: String
    },
    description: {
        type: String,
        optional: true
    },
    stargazers_count: {
        type: Number,
        min: 0
    },
    watchers_count: {
        type: Number,
        min: 0
    },
    forks_count: {
        type: Number,
        min: 0
    },
    open_issues_count: {
        type: Number,
        min: 0
    },
    createdAtGit: {
        type: Date,
        denyUpdate: true
    },
    updatedAtGit: {
        type: Date,
        denyUpdate: true
    },
    createdAt: {
        type: Date,
        denyUpdate: true
    },
    updatedAt: {
        type: Date,
        denyUpdate: true
    }
});

Github.attachSchema(Github.schema);

Github.publicFields = {
    name: 1,
    full_name: 1,
    html_url: 1,
    git_url: 1,
    description: 1,
    stargazers_count: 1,
    watchers_count: 1,
    forks_count: 1,
    createdAtGit: 1,
    updatedAtGit: 1
};
