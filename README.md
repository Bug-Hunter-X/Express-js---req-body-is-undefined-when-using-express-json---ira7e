# Express.js - req.body undefined Issue

This repository demonstrates a common issue encountered when working with Express.js and parsing JSON request bodies. The problem occurs when `req.body` remains undefined or empty even after applying the `express.json()` middleware.  The solution shows how to correctly configure the middleware to properly parse incoming JSON data.

## Bug Description

The provided `bug.js` file shows an Express.js application designed to receive a JSON POST request. However, the `req.body` object within the request handler remains undefined, causing the application to fail to process the data correctly. This is due to incorrect configuration or missing necessary dependencies for handling JSON data in Express.

## Solution

The `bugSolution.js` file presents the corrected code. The primary change involves ensuring the `express.json()` middleware is correctly placed in the application's middleware stack *before* the route handler that expects the JSON data.  This modification allows the `express.json()` middleware to properly parse the JSON request body and populate `req.body`.