#!/bin/bash

# Database Setup Script
# This script helps set up the PostgreSQL database for the Reading Habit Tracker

echo "📚 Reading Habit Tracker - Database Setup"
echo "=========================================="
echo ""

# Check if psql is available
if ! command -v psql &> /dev/null; then
    echo "❌ Error: psql is not installed or not in PATH"
    echo "Please install PostgreSQL: https://www.postgresql.org/download/"
    exit 1
fi

# Prompt for database credentials
read -p "PostgreSQL username (default: postgres): " DB_USER
DB_USER=${DB_USER:-postgres}

read -sp "PostgreSQL password: " DB_PASSWORD
echo ""

read -p "Database name (default: reading_habit_tracker): " DB_NAME
DB_NAME=${DB_NAME:-reading_habit_tracker}

read -p "Host (default: localhost): " DB_HOST
DB_HOST=${DB_HOST:-localhost}

read -p "Port (default: 5432): " DB_PORT
DB_PORT=${DB_PORT:-5432}

export PGPASSWORD=$DB_PASSWORD

echo ""
echo "Creating database..."
createdb -h $DB_HOST -p $DB_PORT -U $DB_USER $DB_NAME 2>/dev/null || echo "Database may already exist"

echo "Running schema.sql..."
psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -f db/schema.sql

echo "Running seed.sql..."
psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -f db/seed.sql

echo ""
echo "✅ Database setup complete!"
echo ""
echo "Update your backend/.env file with:"
echo "DATABASE_URL=postgresql://$DB_USER:$DB_PASSWORD@$DB_HOST:$DB_PORT/$DB_NAME"

unset PGPASSWORD
